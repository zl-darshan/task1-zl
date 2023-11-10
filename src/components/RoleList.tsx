import roleList from "../data/roleList"
import "../styles/roleList.css"

export default function RoleList(_props: any): React.ReactNode {
    return (
        <div className="role-list-div">
            {
                roleList.map((roleData) => {
                    return (
                        <div className="role-card">
                            <div className="role-card-data">
                                <div className="header-div">
                                    <div className="expiry-div">
                                        <p className="text">{roleData.expiryDate}</p>
                                    </div>
                                    <h4 className="title">{roleData.title}</h4>
                                </div>

                                <div className="date-place-div">
                                    <div className="duration-title">Date & Time:</div>
                                    <div className="duration-place-data">
                                        <span className="duration-dates">
                                            {roleData.dateStart} to {roleData.dateEnd}
                                        </span>
                                        <span className="pipe"></span>
                                        <span className="location">
                                            <img src="" alt="" className="location-logo" />
                                            {roleData.location}
                                        </span>
                                    </div>
                                </div>

                                <div className="seperator"></div>

                                <div className="job-roles-div">
                                    <div className="job-roles-title">Job Roles:</div>
                                    <div className="roles-data-grid">
                                        {roleData.jobRoles?.map((job) => {
                                            return (
                                                <span className="role-data">
                                                    <img src="" alt="" className="role-logo" />
                                                    <span className="role-title">{job.name}</span>
                                                </span>
                                            )
                                        })}
                                    </div>
                                </div>

                                <div className="tags-div">
                                    <div className="tags-data-grid">
                                        {roleData.tags?.map((tag) => {
                                            return (
                                                <span className="tag-data">
                                                    <span className="role-title">{tag}</span>
                                                </span>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div className="role-card-action">
                                <button className="view-more">
                                    VIEW MORE DETAILS
                                </button>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}