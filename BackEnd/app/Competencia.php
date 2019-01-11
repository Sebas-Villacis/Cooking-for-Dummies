<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Competencia extends Model
{
    protected $table = 'matches';
    protected $primaryKey = 'matnombre';
    public $incrementing = false;
    public $timestamps = false;
    protected $fillable = ['matnombre','recid', 'mattiempo', 'matdescripcion','matfechacreacion'];
}
