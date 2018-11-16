<!DOCTYPE html>
<html>

    <head>
        <meta charset=" UTF8">
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">


    <body>

           
           <form>
            {{ csrf_field() }}
                 <div class="form-group row">
                    
                    <label for="recnombre" class="col-sm-2 col-form-label">Nombre</label>
                    
                    <div class="col-sm-2">

                     <input type="text" class="form-control" id="recnombre" name="recnombre" >
                   
                    </div>
                </div>

                <div class="form-group row">
                    <label for="reccategoria" class="col-sm-2 col-form-label">Categoria</label>
                    <div class="col-sm-3">
                        <select id="reccategoria" name="reccategoria" class="form-control">
                            <option selected value="Postres">Postres</option>
                            <option selected value="Bocadillos">Bocadillos</option>
                            <option selected value="Entrada">Entrada</option>
                            <option selected value="Plato Fuerte">Plato Fuerte</option>
                        </select>
                    </div>
                </div>

                 <div class="form-group row">
                    
                    <label for="rectiempo" class="col-sm-2 col-form-label">Tiempo</label>
                    
                    <div class="col-sm-2">

                     <input type="text" class="form-control" id="rectiempo" name="rectiempo" placeholder="Ingrese en minutos" >
                   
                    </div>
                </div>

                <div class="form-group row">
                    <label for="recingredientes" class="col-sm-2 col-form-label">Ingredientes</label>
                    <div class="col-sm-7">
                        <textarea class="form-control" id="recingredientes" name="recingredientes" rows="3" ></textarea>
                    </div>
                </div>

                <div class="form-group row">
                    <label for="recpasos" class="col-sm-2 col-form-label">Pasos</label>
                    <div class="col-sm-7">
                        <textarea class="form-control" id="recpasos" name="recpasos" rows="3" ></textarea>
                    </div>
                </div>

                <div class="form-group row">
                    
                    <label for="recimagen" class="col-sm-2 col-form-label">Imagen</label>
                    
                    <div class="col-sm-2">

                     <input type="text" class="form-control" id="recimagen" name="recimagen" >
                   
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary" id="save" name="save" formmethod="post" formaction="{{URL::to('/guardarRecetas')}}" >Guardar</button>
                    </div>
                </div>
            </form>
           
  
    </body>
</html>