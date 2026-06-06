 let n1 = prompt ("Digite seu peso:");
 let n2 = prompt ("Digite a sua altura:");

        n1 = parseFloat(n1);
        n2 = parseFloat(n2);

        let IMC = (n1/(n2*n2));
       if (IMC>=25){
        alert ("Voce é osso")
       }
       else {
        alert ("Voce é gay")
       }
