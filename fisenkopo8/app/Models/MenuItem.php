<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder; // <-- ЭТО ВАЖНО ДОБАВИТЬ

class MenuItem extends Model
{
    protected $fillable = [
        'code', 'name', 'description', 'price', 'category', 'tag', 'is_active'
    ];

    // ЭТОТ БЛОК ЗАСТАВЛЯЕТ LARAVEL ВСЕГДА ФИЛЬТРОВАТЬ НЕАКТИВНЫЕ ТОВАРЫ
    protected static function booted()
    {
        static::addGlobalScope('active', function (Builder $builder) {
            $builder->where('is_active', 1);
        });
    }
}