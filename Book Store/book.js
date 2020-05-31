module.exports = class Book{
    constructor(obj)
    {
        this.Id = obj && obj.Id ? obj.Id : null;
        this.Name = obj && obj.Name ? obj.Name : "";
        this.ISBN = obj && obj.ISBN ? obj.ISBN : "";
        this.Author = obj && obj.Author ? obj.Author : "";
    }
}
