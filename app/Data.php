<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Data extends Model
{
    protected $fillable = [
        'number', 'shot', 'GB', 'miss'
    ];
}
