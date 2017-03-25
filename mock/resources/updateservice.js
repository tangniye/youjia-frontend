var items ={
    "update_version": "v1003t23ge",
    "update_date": " 2016-5-2410: 47: 40",
    "components": [
        {
            "name": "XXXX",
            "version": "YYYY",
            "date":new Date(),
            "category": "primary",
            "dependencies": ["XXXX1","XXXX2"],
            "status":-1
        },
        {
            "name": "UUUUU",
            "version": "YYYY",
            "date": new Date(),
            "category": "facility",
            "dependencies": [ "XXXX2","XXXX2"],
            "status":0
        },
        {
            "name": "UUUUU",
            "version": "YYYY",
            "date": new Date(),
            "category": "antivirus",
            "dependencies": [ "XXXX2","XXXX2"],
            "status":8
        },
        {
            "name": "UUUUU",
            "version": "YYYY",
            "date": new Date(),
            "category": "intelligence",
            "dependencies": [ "XXXX2","XXXX2"],
            "status":100
        }

    ],
    "dependencies": [
        "v1003t21ge",
        "v1003t22ge"
    ],
    "update_notes": "XXXXXXXXXXXXXXX"
};
module.exports = items;