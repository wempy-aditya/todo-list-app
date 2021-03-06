<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List APP | Wempy Tech</title>
    <meta name="description" content="Aplikasi pencatat kegiatan sehari-hari dengan teknologi realtime database firebase dan berbasis website, dikembangkan oleh wempy.tech">
    <meta name="keywords" content="FIREBASE, GOOGLE, DATABASE, REALTIME DATABASE, PHP, JS, TODOLIST, HTML, CSS">
    <meta name="author" content="Wempy Aditya"><meta name="theme-color" content="#0099ff">
    <link rel="apple-touch-icon" sizes="192x192" href="Wempy1.png">
    <link rel="icon" sizes="192x192" href="Wempy1.png">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" href="load.css">
</head>

<body> 

<script src="load.js"></script> 
<div id="load"></div>

<div id="contents" style="background-color:whitesmoke;">

    <div class="jumbotron card card-image" style="background-image: url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg);">
        <div class="text-white text-center py-5 px-4">
            <div>
                <h1 class="card-title h1-responsive pt-3 font-bold" style="font-size:40px;"><strong>My Todo List App</strong></h1>
                <p class="mx-5 mb-5" style="font-size:17px;"> Record all your daily activities with this todo list application.</p>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row mt-4">
            <div class="col">
                <div class="card">
                    <div class="card-header text-light" style="background: linear-gradient(to right, #0099ff 0%, #66ffcc 98%);"> Todo List Form</div>
                    <div class="card-body" style="background-color: #F8F8FF;">
                        <form id="myForm">
                            <div class="form-group"> 
                                <label>Apa Yang Akan Anda Lakukan Hari Ini ?</label> 
                                <input type="text" class="form-control" placeholder="Masukkan di sini...." id="txtTodo" style="background-color: whitesmoke;">
                            </div> 
                            <button type="submit" class="btn btn-outline-info" id="btn">Simpan</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-4 mb-4">
            <div class="col">
                <div class="card">
                    <div class="card-header text-light" style="background: linear-gradient(to right, #0099ff 0%, #66ffcc 98%);">Todo List Table</div>
                    <div class="card-body" style="background-color: #F8F8FF;">
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Kegiatan</th>
                                        <th>Status</th>
                                        <th class="text-center" style="width: 240px;">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody id="todoList">
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <br><br>
    </div> 

    <footer class="footer mt-auto py-3" style="background-image: url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg);">
        <div class="container">
            <div class="row">
                <div class="col"> 
                    <span class="text-light">
                        &copy; Copyright 2020 
                        <a href="https://wempy.tech" target="_blank" rel="noopener noreferrer" class="text-light">
                            www.wempy.tech
                        </a>
                    </span>
                </div>
                <div class="col"> 
                    <span class="text-light d-flex justify-content-end">
                        V 1.2.0
                    </span>
                </div>
            </div>
        </div> 
    </footer> 
</div> 

<script src="https://www.gstatic.com/firebasejs/7.15.1/firebase-app.js"></script> 
<script src="https://www.gstatic.com/firebasejs/7.15.1/firebase-database.js"></script> 
<script src="main.js"></script> 
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script> 
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script> 
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script> 

</body>
</html>