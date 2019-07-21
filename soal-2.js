

var banyakAngka = 20;
var angkaGenap = []
var angkaGanjil= []

function klarifikasiAngka()
{
    for ( x = 0; x <= banyakAngka; x++)
    {
        if ( x % 2 == 0)
        {
            angkaGenap.push(x)
        }else{
            angkaGanjil.push(x)
        }
    }
    document.write("Angka Genap = " + angkaGenap + "<br>")
    document.write("<br>")
    document.write("Angka Ganjil = " + angkaGanjil + "<br>")
    }
klarifikasiAngka()
