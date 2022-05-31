<?php

namespace App\Helpers\SearchFilterHelpers;

use App\Models\Booking;
use App\Models\Client;

class Clients {

    public function __construct()
    {
        $this->model = Client::query();
    }

    public function searchable()
    {
        $this->model->with('bookings');
        $this->searchColumns();
        $this->sortBy();
        $per_page = Request()->per_page;
        if ($per_page=='-1' || !isset(Request()->per_page)) return $this->model->paginate($this->model->count());
        return $this->model->paginate($per_page);
    }

    public function searchColumns()
    {
        $searchable = ['fullname', 'student_number'];
        if(Request()->keyword && Request()->keyword!="null"){
            $keyword = Request()->keyword;
            foreach ($searchable as $column) {
                if($column=='fullname'){
                    $this->model->orWhereRaw("CONCAT(TRIM(`first_name`),' ', TRIM(`last_name`)) LIKE "."'%" .$keyword. "%'");
                }
                if($column=='student_number'){
                    $this->model->orWhere($column, 'like', "%".$keyword."%");
                }
            }
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
                if($exactSortKey == 'phone_number'){
                    $this->model->orderBy('phone', $exactSortType);
                }
                elseif($exactSortKey == 'client'){
                    $this->model->join('clients', 'clients.id', '=', 'bookings.client_id')
                        ->select('clients.last_name', 'bookings.*')
                        ->orderBy('clients.last_name', $exactSortType);  
                }
                else{
                    $this->model->orderBy($exactSortKey, $exactSortType);  
                }       
            }
        }
        else{
            $this->model->orderBy('id','desc');
        }
    }
}