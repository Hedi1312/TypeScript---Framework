const couleur = {
    color: 'red',
    print: function() {
        console.log(this.color)
    }
}

const printColor = couleur.print

printColor()