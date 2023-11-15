import roleList from "../data/roleList"
import "../styles/roleList.css"

export default function RoleList(_props: any): React.ReactNode {

    function dateDiffInDays(a: Date, b: Date) {
        const _MS_PER_DAY = 1000 * 60 * 60 * 24;
        // Discard the time and time-zone information.
        const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    }


    return (
        <div className="role-list-div">
            {
                roleList.map((roleData, index) => {
                    const expiryDataInWeek = dateDiffInDays(new Date(Date.now()), new Date(roleData.expiryDate));
                    return (
                        <div key={index} className="role-card">
                            <div className="role-card-data">
                                <div className="header-div">
                                    {
                                        (expiryDataInWeek <= 7 && expiryDataInWeek > 0) &&
                                        (<div className="expiry-div">
                                            <p className="text">Expires in {expiryDataInWeek} {expiryDataInWeek == 1 ? "day" : "days"}</p>
                                        </div>)
                                    }
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
                                            <img src="./src/assets/location_on_black_24dp.svg" className="location-logo" />
                                            {roleData.location}
                                        </span>
                                    </div>
                                </div>

                                <div className="separator"></div>

                                <div className="job-roles-div">
                                    <div className="job-roles-title">Job Roles:</div>
                                    <div className="roles-data-grid">
                                        {roleData.jobRoles?.map((job, index) => {
                                            return (
                                                <span key={index} className="role-data-div">
                                                    <span className="role-data">
                                                        <img src={`./src/assets/${job.src}`} alt="" className="role-logo" />
                                                        <span className="role-title">{job.name}</span>
                                                        {index + 1 != roleData.jobRoles.length && (<span className="separator pipe"></span>)}
                                                    </span>
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="tags-div">
                                    <div className="tags-data-grid">
                                        {roleData.tags?.map((tag) => {
                                            return (
                                                <span className="tag-data">
                                                    <div className="role-title">{tag}</div>
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