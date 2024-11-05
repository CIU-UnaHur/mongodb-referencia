const Libro = require('../models/libro.model')
const Autor = require('../models/autor.model')

async function seedDatabase() {
    try {
        await Autor.deleteMany({})
        await Libro.deleteMany({})

        const autores = await Autor.insertMany([
            { nombre: 'Gabriel García Márquez', nacionalidad: 'Colombiana', fechaNacimiento: new Date('1927-03-06') },
            { nombre: 'Isabel Allende', nacionalidad: 'Chilena', fechaNacimiento: new Date('1942-08-02') },
            { nombre: 'J.K. Rowling', nacionalidad: 'Británica', fechaNacimiento: new Date('1965-07-31') }
        ])

        // Insertamos libros referenciando a los autores
        await Libro.insertMany([
            { titulo: 'Cien años de soledad', genero: 'Realismo mágico', fechaPublicacion: new Date('1967-05-30'), autor: autores[0]._id },
            { titulo: 'El otoño del patriarca', genero: 'Realismo mágico', fechaPublicacion: new Date('1975-01-01'), autor: autores[0]._id },
            { titulo: 'La casa de los espíritus', genero: 'Realismo mágico', fechaPublicacion: new Date('1982-01-01'), autor: autores[1]._id },
            { titulo: 'Harry Potter y la piedra filosofal', genero: 'Fantasía', fechaPublicacion: new Date('1997-06-26'), autor: autores[2]._id },
            { titulo: 'Harry Potter y la cámara secreta', genero: 'Fantasía', fechaPublicacion: new Date('1998-07-02'), autor: autores[2]._id }
        ])

        console.log("Base de datos poblada con autores y libros.")

    } catch (error) {
        console.error('Error al poblar la base de datos:', error)
    }
}

module.exports = seedDatabase