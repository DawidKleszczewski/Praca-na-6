<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./style.css" />
        <title>Lista Książek + php</title>
    </head>
    <body>
        <nav class="navb">
            <ul>
                <li>Dodaj Książke</li>
                <li>Lista Książek</li>
            </ul>
        </nav>

        <div>
            <div class="box">
                <h1>Lista Książek</h1>
            </div>
        </div>

        <section>
            <div id="grid">
                <?php
                $conn = mysqli_connect(
                    'localhost',
                    'root',
                    '',
                    'ksiazki'
                );

                $sql = "SELECT tytul, opis from ksiazki";

                $query = mysqli_query($conn,$sql);

                while($row = mysqli_fetch_assoc($query)){
                    echo $row['tytul'].'<br>'.$row['opis'].'<br>';
                }
                ?>
            </div>
        </section>

        <footer class="ftr">
            <form action="ksiazki.php" method="post" class="form">
                <input
                    type="text"
                    class="m-t size tytul"
                    name="tytul"
                    placeholder="tytul"
                />
                <textarea
                    class="size opis"
                    name="opis"
                    cols="30"
                    rows="10"
                    placeholder="opis ksiazki"
                ></textarea>
                <button type="submit" class="btn">Wyślij</button>
            </form>
        </footer>

        <script src=""></script>
    </body>
</html>
