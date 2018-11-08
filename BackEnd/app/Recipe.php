<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    protected $table = 'recipes';
    protected $primaryKey = 'id';
    public $incrementing = false;
    public $timestamps = false;
    protected $fillable = ['id','categoria', 'usuclave', 'nombreReceta','nombreReceta','ingredientes',
                            'descripcion','tiempo','imagen'];
}
