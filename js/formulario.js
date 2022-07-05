        var matri=1250000;
        var desc= matri*0.15;
        var text = "Digite su nota de ";
      
            nombre=(prompt("\nInrese su Nombre "));
            while(true){
               n1=parseInt(prompt(text+"MYSQL")); 
            /*
            funsion para aceptar solo numerosm   n1,n2,n3,n4,n5
            */
                if(!isNaN(n1) && n1 != null && n1 != ""){
                    // alert('es numero');
                    if(n1>0 && n1<101){
                        // alert('esta en el intervalo');
                        break;
                    }else{
                        alert('Debe estar en el rango de 1 a 100');
                        continue;
                    }  
                }else if(n1 == 102){
                    // exit();
                    break;
                }else{
                    alert('No ingreso un número,\n intente un valor de 1  a 100');
                  continue;
                }
                }
            
            while(true){
                n2=parseInt(prompt(text+"HTML"));
                if(!isNaN(n2) && n2 != null && n2 != ""){
                     if(n2>0 && n2<101){
                        break;
                    }else{
                        alert('Debe estar en el rango de 1 a 100');
                        continue;
                    } 
                }else if(n2 =='fin'){
                    break;
                }else{
                    alert('no es numero');
                continue;
                }
                }
            while(true){
                n3=parseInt(prompt(text+"PHP"));
            if(!isNaN(n3) && n3 != null && n3 != ""){
                if(n3>0 && n3<101){
                    break;
                }else{
                    alert('Debe estar en el rango de 1 a 100');
                    continue;
                } 
            }else if(n3 == 'fin'){
                break;
            }else{
                alert('no es numero')
            continue;
            }
            }
            while(true){
                 n4=parseInt(prompt(text+"PYTHON"));
            if(!isNaN(n4) && n4 != null && n4 != ""){
                if(n4>0 && n4<101){
                    break;
                }else{
                    alert('Debe estar en el rango de 1 a 100');
                    continue;
                } 
            }else if(n4 == 'fin'){
                break;
            }else{
                alert('no es numero');
            continue;
            }
            }
            while(true){
                n5=parseInt(prompt(text+"CSS"));
            if(!isNaN(n5) && n5 != null && n5 != ""){
                if(n5>0 && n5<101){
                    break;
                }else{
                    alert('Debe estar en el rango de 1 a 100');
                    continue;
                } 
            }else if(n5 == 'fin'){
                break;
            }else{
                alert('no es numero');
            continue;
            }
            }
            
        Promedio=(n1+n2+n3+n4+n5)/5;
      
        var materias =["MYSQL","HTML","PHP","PYTHON","CSS"];
        var number =[n1,n2,n3,n4,n5];
      
            if(Promedio > 40){
                paga=matri-desc;
               var S1 ="Felicitaciones "+nombre+", obtuviste un descuento por buen rendimiento académico!";
               
            //   window.alert("Bienvenido a nuestro sitio web 1");
            //    return S1;
            }
                else{
                    paga=matri;
                    var S1 ="Lo lamento, no obtuviste descuento, debes esforzarte un poco más!";
                    
                    // window.alert("Bienvenido a nuestro sitio web 2");
                    // return S1;
                }

