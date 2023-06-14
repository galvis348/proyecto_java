<html>
    <body>
        <script language="javascript">
            function mailpage()
         {
            mail_str = "mailto:nombre@dominio.com?subject=ejemplos: " +
            document.title;
            mail_str += "&body=te recomiendo que visites esta pagina (https://www.cnice.mec.es/) --" + document.title;
            mail_str += ". enlace: " + location.href;
            location.href = mail_str;
         }
        </script>
        <a HREF="javascript:mailpage()">Mandar correo </a> 
           </body>
</html>
