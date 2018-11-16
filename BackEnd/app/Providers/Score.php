<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Score extends Model
{
    protected $table = 'scores';
    protected $primaryKe = 'scoid';
    protected $fillable = ['matnombre', 'scoid', 'scovalor', 'scocompetencia'];
}