<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    protected $table = 'recipes';
    protected $primaryKey = 'id';
    public $incrementing = false;
    public $timestamps = false;
    protected $fillable = ['recid','reccategoria', 'recnombre', 'rectiempo','recingredientes','recpasos',
                            'recimagen'];
}
