const course = require('../models/courseSchema')
const searchController = require('../controller/courseSearchController')

describe("searchTest" , () => {
    it.todo('search for a course in db', () => {
        const course1 = {"title":"Math3" , id: 8 , "subject": "Mathmetics" , "rating": 3 , "price": 6000}
        searchController.getCourse(course1)
        expect(course1)

        
    })


    it.todo('search for a course in db', () => {
        
    });
})