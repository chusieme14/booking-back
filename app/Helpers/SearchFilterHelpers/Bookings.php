<?php

namespace App\Helpers\SearchFilterHelpers;

use App\Models\Booking;

class Bookings {

    public function __construct()
    {
        $this->model = Booking::query();
    }

    public function searchable()
    {
        $this->searchColumns();
        $this->sortBy();
        $this->forAppointment();
        $this->forTransaction();
        $per_page = Request()->per_page;
        if ($per_page=='-1' || !isset(Request()->per_page)) return $this->model->paginate($this->model->count());
        return $this->model->paginate($per_page);
    }

    public function forAppointment()
    {
        if(Request()->appointment){
            $this->model->whereIn('status',[1,2]);
        }
    }

    public function forTransaction()
    {
        if(Request()->transactions){
            $this->model->whereIn('status', [3, 4]);
        }
    }

    public function searchColumns()
    {
        $searchable = ['fullname', 'name', 'student_number'];
        if(Request()->keyword && Request()->keyword!="null"){
            $keyword = Request()->keyword;
            foreach ($searchable as $column) {
                if($column=='name'){
                    $this->model->orWhereHas('service',function($q) use($column, $keyword){
                        $q->where($column, 'like', "%".$keyword."%");
                    }); 
                }
                if($column=='fullname'){
                    $this->model->orWhereHas('client',function($q) use($keyword){
                        $q->whereRaw("CONCAT(TRIM(`first_name`),' ', TRIM(`last_name`)) LIKE "."'%" .$keyword. "%'");
                    }); 
                }
                if($column=='student_number'){
                    $this->model->orWhereHas('client',function($q) use($column,$keyword){
                        $q->where($column, 'like', "%".$keyword."%");
                    }); 
                }
            }
        }
    }

    public function byDepartment()
    {
        if(Request()->department_id){
            $this->model->where('department_id', Request()->department_id);
        }
    }

    public function sortBy()
    {
        if(Request()->sortBy){
            $sortByFilters = explode(',', Request()->sortBy);
            foreach ($sortByFilters as $key => $filter) {
                if (empty($filter)) continue;

                $exactSortKey = explode('/', $filter)[0];
                $exactSortType = explode('/', $filter)[1];
                if($exactSortKey == 'service'){
                    $this->model->join('services', 'services.id', '=', 'bookings.service_id')
                        ->select('services.name', 'bookings.*')
                        ->orderBy('services.name', $exactSortType);
                }
                elseif($exactSortKey == 'client'){
                    $this->model->join('clients', 'clients.id', '=', 'bookings.client_id')
                        ->select('clients.last_name', 'bookings.*')
                        ->orderBy('clients.last_name', $exactSortType);  
                }
                elseif($exactSortKey == 'staff'){
                    $this->model->join('staffs', 'staffs.id', '=', 'bookings.staff_id')
                        ->select('staffs.last_name', 'bookings.*')
                        ->orderBy('staffs.last_name', $exactSortType);  
                }
                elseif($exactSortKey == 'rating'){
                    $this->model->join('ratings', 'ratings.booking_id', '=', 'bookings.id')
                        ->select('ratings.star_number', 'bookings.*')
                        ->orderBy('ratings.star_number', $exactSortType);  
                }
                else{
                    $this->model->orderBy($exactSortKey, $exactSortType);  
                }       
            }
        }
        else{
            if(Request()->transactions){

                $this->model->orderBy('id','desc');
            }else{
                $this->model->orderBy('id');
            }
        }
    }
}