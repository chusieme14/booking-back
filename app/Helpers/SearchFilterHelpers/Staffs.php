<?php

namespace App\Helpers\SearchFilterHelpers;

use App\Models\Staff;

class Staffs {

    public function __construct()
    {
        $this->model = Staff::query();
    }

    public function searchable()
    {
        $this->model->where('employeeID', '!=', null);
        $this->searchColumns();
        $this->sortBy();
        $per_page = Request()->per_page;
        if ($per_page=='-1' || !isset(Request()->per_page)) return $this->model->paginate($this->model->count());
        return $this->model->paginate($per_page);
    }

    public function searchColumns()
    {
        $searchable = ['fullname', 'employeeID','username'];
        if(Request()->keyword && Request()->keyword!="null"){
            $keyword = Request()->keyword;
            foreach ($searchable as $column) {
                if($column=='fullname'){
                    $this->model->orWhereRaw("CONCAT(TRIM(`first_name`),' ', TRIM(`last_name`)) LIKE "."'%" .$keyword. "%'");
                }else{
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