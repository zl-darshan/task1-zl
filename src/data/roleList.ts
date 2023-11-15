const roleList: {
    title: string,
    dateStart: string,
    dateEnd: string,
    expiryDate: string,
    location: string,
    jobRoles: {
        name: string,
        src: string
    }[],
    tags: string[]
}[] = [
        {
            title: "Walk In for Designer Job Role",
            dateStart: "2023-11-20",
            dateEnd: "2023-11-21",
            expiryDate: "2023-11-19",
            location: "Mumbai",
            jobRoles: [
                {
                    name: "Instructional Designer",
                    src: "Instructional Designer.svg"
                }
            ],
            tags: []
        },
        {
            title: "Walk In for Multiple Job Roles",
            dateStart: "2023-12-03",
            dateEnd: "2023-12-04",
            expiryDate: "2023-12-29",
            location: "Mumbai",
            jobRoles: [
                {
                    name: "Instructional Designer",
                    src: "Instructional Designer.svg"
                },
                {
                    name: "Software Engineer",
                    src: "Software Engineer.svg"
                },
                {
                    name: "Software Quality Engineer",
                    src: "Software Quality Engineer.svg"
                }
            ],
            tags: [
                "Internship Opportunity for MCA Students"
            ]
        },
        {
            title: "Walk In for Design and Development Job Role",
            dateStart: "2023-12-20",
            dateEnd: "2023-12-21",
            expiryDate: "2023-12-20",
            location: "Mumbai",
            jobRoles: [
                {
                    name: "Instructional Designer",
                    src: "Instructional Designer.svg"
                },
                {
                    name: "Software Engineer",
                    src: "Software Engineer.svg"
                }
            ],
            tags: []
        }
    ]

export default roleList;