<?php
$x=1245;
if($x%3==0 AND $x%5==0)
{
echo "$x est multiple de 3 et de 5 
";
}
else
{
echo "$x n'est pas multiple de 3 et de 5 
";
}
?>
<br/>


<?php
$sexe="F";
$age=43;
if($sexe=="F" AND $age>=21 AND $age <= 40)
{
echo "Bonjour Madame vous avez entre 21 et 40 ans 
";
}
else
{
echo "Désolé, vous ne remplissez pas les conditions 
";
}
?>
<br/>
<?php
$compteur=0;
do
{
$x=rand(0,1000);
$y=rand(0,1000);
$z=rand(0,1000);
$compteur++;
echo $x, "," , $y, "," , $z,"
";
}
while($x%2==1 OR $y%2==0 OR $z%2==0);
echo "Résultat obtenu en $compteur coups";
?>
