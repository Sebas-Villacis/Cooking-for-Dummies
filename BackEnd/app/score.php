<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class score extends Model
{
    protected $table = 'scores';
    protected $primaryKey = 'scoid';
    public $incrementing = false;
    public $timestamps = false;
    protected $fillable = ['matnombre','scoid', 'scovalor', 'scocompetencia'];
}
