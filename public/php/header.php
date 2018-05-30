<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width = device-width , initial-scale= 1" >
    <link rel="stylesheet" type="text/css" href="../css/headerstyle.css">
    <link rel="icon" type="image/png" href="image/ecghanalogo.png" >
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <script type="text/javascript" src="../js/jquery-3.3.1.js"></script>
    <script type="text/javascript" src="../myjs/js.js"> </script>



    <title> Store - CEG GHANA </title>
  </head>
  <body >
  <!-- start of top menu -->
  <nav class="header">

      <div class="menu-bar">

      <span class="left"><i class="fas fa-bars" id="menbar"></i><a href="../index.php" style="text-decoration:none;"> CE GHANA - Store</a></span>

      <ul class="center">
            <li><a href="">Home</a></li>           
            <li><a href="">Contact </a></li>
      </ul>
      
      <ul class="right">
        <li><i class="material-icons">shopping_cart</i> <b id="shoppingcart">0</b> </li>

        <li ><?php if (isset($_SESSION['username'])) {
            echo "<div><i class='material-icons'>person</i> <span>username</span>  </div>";
        }else{
          echo "<li id='login' style='cursor:pointer;'> <a href='#' style='text-decoration:none;'>Login</a></li> ";
        }
          ?></li>
      </ul>

      <div class="clear"></div>

  </nav>

  </body>
</html>
