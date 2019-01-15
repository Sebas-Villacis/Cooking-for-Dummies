<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
//Login
Route::post('login', 'APIUserController@login');
Route::post('register', 'APIUserController@register');
//competencia
Route::get('Competencia','CompetenciasDP@index');
Route::get('Competencia/{id}','CompetenciasDP@getByNombre');
Route::post('Competencia','CompetenciasDP@store');
Route::put('Competencia/{id}','CompetenciasDP@update');
Route::delete('Competencia/{id}','CompetenciasDP@destroy');
//recetas
Route::get('Recetas','RecipeController@index');
Route::get('/RecetasByCategoria/{buscar}','RecipeController@getByCategoria');
Route::get('/RecetasByNombre/{nombre}','RecipeController@getByNombre');
Route::get('/RecetasImagenes','RecipeController@getImages');
Route::get('RecetasByTiempo','RecipeController@getByTiempo');
Route::post('guardarRecetas','RecipeController@store');
Route::put('actulizarRecetas','RecipeController@update');
Route::delete('eliminarRecetas','RecipeController@destroy');
//logros
Route::post('Logro','ScoreDP@store');