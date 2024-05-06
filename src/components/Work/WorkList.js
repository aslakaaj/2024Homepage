import WorkTile from "./WorkTile";
import data from "../../data/data.json";
import "./WorkList.css";

const WorkList = () => {
    return (
        <ul className="work_list">
            {data.work.map((work) => (
                <WorkTile
                    key={Math.random()}
                    title={work.title}
                    emoji={work.emoji}
                    tag01={work.tag01}
                    tag02={work.tag02}
                    link={work.link}
                    img={work.img}
                />
            ))}
        </ul>
    );
}

export default WorkList;