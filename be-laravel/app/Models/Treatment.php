<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Treatment extends Model
{
    // use HasFactory;

    protected $table = 'treatments';
    protected $primaryKey = 'id';
    protected $keyType = 'integer';
    public $timestamps = true;
    public $incrementing = true;

    protected $fillable = [
        'name',
        'description',
        'price',
    ];

    public function appointments(): HasMany
    {
        return $this->hasMany(Appointment::class, 'treatment_id');
    }
}
