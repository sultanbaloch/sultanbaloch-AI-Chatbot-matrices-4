function plus() {

    let a11 = Number(document.getElementById("a11").value);
    let a12 = Number(document.getElementById("a12").value);
    let a13 = Number(document.getElementById("a13").value);
    let a21 = Number(document.getElementById("a21").value);
    let a22 = Number(document.getElementById("a22").value);
    let a23 = Number(document.getElementById("a23").value);
    let a31 = Number(document.getElementById("a31").value);
    let a32 = Number(document.getElementById("a32").value);
    let a33 = Number(document.getElementById("a33").value);

    let b11 = Number(document.getElementById("b11").value);
    let b12 = Number(document.getElementById("b12").value);
    let b13 = Number(document.getElementById("b13").value);
    let b21 = Number(document.getElementById("b21").value);
    let b22 = Number(document.getElementById("b22").value);
    let b23 = Number(document.getElementById("b23").value);
    let b31 = Number(document.getElementById("b31").value);
    let b32 = Number(document.getElementById("b32").value);
    let b33 = Number(document.getElementById("b33").value);



    let a = [
        [a11, a12, a13],
        [a21, a22, a23],
        [a31, a32, a33]

    ]


    let b = [
        [b11, b12, b13],
        [b21, b22, b23],
        [b31, b32, b33]
    ]


    let c = [
        [],
        [],
        []
    ]



    for (i = 0; i < a.length; i++) {
        for (j = 0; j < b.length; j++) {
            c[i][j] = a[i][j] + b[i][j]


        }

    }

    document.getElementById('c11').value = c[0][0]
    document.getElementById('c12').value = c[0][1]
    document.getElementById('c13').value = c[0][2]
    document.getElementById('c21').value = c[1][0]
    document.getElementById('c22').value = c[1][1]
    document.getElementById('c23').value = c[1][2]
    document.getElementById('c31').value = c[2][0]
    document.getElementById('c32').value = c[2][1]
    document.getElementById('c33').value = c[2][1]
        //     a.map((eachRow, index => {
        //         eachRow.map((eachRowitem) => {
        //             c = eachRowitem + b[index][i]

    //             console.log(c)
    //         })
    //     }))

    // }

}



function minus() {

    let a11 = Number(document.getElementById("a11").value);
    let a12 = Number(document.getElementById("a12").value);
    let a13 = Number(document.getElementById("a13").value);
    let a21 = Number(document.getElementById("a21").value);
    let a22 = Number(document.getElementById("a22").value);
    let a23 = Number(document.getElementById("a23").value);
    let a31 = Number(document.getElementById("a31").value);
    let a32 = Number(document.getElementById("a32").value);
    let a33 = Number(document.getElementById("a33").value);

    let b11 = Number(document.getElementById("b11").value);
    let b12 = Number(document.getElementById("b12").value);
    let b13 = Number(document.getElementById("b13").value);
    let b21 = Number(document.getElementById("b21").value);
    let b22 = Number(document.getElementById("b22").value);
    let b23 = Number(document.getElementById("b23").value);
    let b31 = Number(document.getElementById("b31").value);
    let b32 = Number(document.getElementById("b32").value);
    let b33 = Number(document.getElementById("b33").value);



    let a = [
        [a11, a12, a13],
        [a21, a22, a23],
        [a31, a32, a33]

    ]


    let b = [
        [b11, b12, b13],
        [b21, b22, b23],
        [b31, b32, b33]
    ]


    let c = [
        [],
        [],
        []
    ]



    for (i = 0; i < a.length; i++) {
        for (j = 0; j < b.length; j++) {
            c[i][j] = a[i][j] - b[i][j]


        }

    }

    document.getElementById('c11').value = c[0][0]
    document.getElementById('c12').value = c[0][1]
    document.getElementById('c13').value = c[0][2]
    document.getElementById('c21').value = c[1][0]
    document.getElementById('c22').value = c[1][1]
    document.getElementById('c23').value = c[1][2]
    document.getElementById('c31').value = c[2][0]
    document.getElementById('c32').value = c[2][1]
    document.getElementById('c33').value = c[2][1]
        //     a.map((eachRow, index => {
        //         eachRow.map((eachRowitem) => {
        //             c = eachRowitem + b[index][i]

    //             console.log(c)
    //         })
    //     }))

    // }

}


function multply() {

    let a11 = Number(document.getElementById("a11").value);
    let a12 = Number(document.getElementById("a12").value);
    let a13 = Number(document.getElementById("a13").value);
    let a21 = Number(document.getElementById("a21").value);
    let a22 = Number(document.getElementById("a22").value);
    let a23 = Number(document.getElementById("a23").value);
    let a31 = Number(document.getElementById("a31").value);
    let a32 = Number(document.getElementById("a32").value);
    let a33 = Number(document.getElementById("a33").value);

    let b11 = Number(document.getElementById("b11").value);
    let b12 = Number(document.getElementById("b12").value);
    let b13 = Number(document.getElementById("b13").value);
    let b21 = Number(document.getElementById("b21").value);
    let b22 = Number(document.getElementById("b22").value);
    let b23 = Number(document.getElementById("b23").value);
    let b31 = Number(document.getElementById("b31").value);
    let b32 = Number(document.getElementById("b32").value);
    let b33 = Number(document.getElementById("b33").value);



    let a = [
        [a11, a12, a13],
        [a21, a22, a23],
        [a31, a32, a33]

    ]


    let b = [
        [b11, b12, b13],
        [b21, b22, b23],
        [b31, b32, b33]
    ]


    let c = [
        [],
        [],
        []
    ]



    for (i = 0; i < a.length; i++) {
        for (j = 0; j < b.length; j++) {
            c[i][j] = a[i][j] - b[i][j]


        }

    }

    document.getElementById('c11').value = c[0][0]
    document.getElementById('c12').value = c[0][1]
    document.getElementById('c13').value = c[0][2]
    document.getElementById('c21').value = c[1][0]
    document.getElementById('c22').value = c[1][1]
    document.getElementById('c23').value = c[1][2]
    document.getElementById('c31').value = c[2][0]
    document.getElementById('c32').value = c[2][1]
    document.getElementById('c33').value = c[2][1]
        //     a.map((eachRow, index => {
        //         eachRow.map((eachRowitem) => {
        //             c = eachRowitem + b[index][i]

    //             console.log(c)
    //         })
    //     }))

    // }

}