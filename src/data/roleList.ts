const roleList: {
    title?: string,
    dateStart?: string,
    dateEnd?: string,
    expiryDate?: string,
    location?: string,
    jobRoles?: {
        name: string,
        src: string
    }[],
    tags?: []
}[] = [
        {
            title: "Walk In for Designer Job Role",
            dateStart: "2021-11-10",
            dateEnd: "2021-11-11",
            expiryDate: "2021-11-10",
            location: "Mumbai",
            jobRoles: [
                {
                    name: "Instructional Designer",
                    src: "Instructional Designer.svg"
                }
            ]
        },
        {
            title: "Walk In for Multiple Job Roles",
            dateStart: "2021-12-03",
            dateEnd: "2021-12-04",
            expiryDate: "2021-11-17",
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
            ]
        },
        {
            title: "Walk In for Design and Development Job Role",
            dateStart: "2021-12-10",
            dateEnd: "2021-12-111",
            expiryDate: "2021-11-17",
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
            ]
        }
    ]

export default roleList;