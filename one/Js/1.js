<script>
    var n=1;
    showpic(n);
    function nextpic()
    {
        n+=1;
        if(n>5)
        n=1;
        showpic(n);
    }
    function prevpic()
    {
        n-=1;
        if(n<1)
        n=5;
        showpic(n);
    }
    function showpic(n)
    {
        var i;
        var pics= document.getElementsByClassName("carousel");
        for(i=0;i<5;i++)
        pics[i].style.display="none";
        pics[n-1].style.display="block";
    }
    </script>