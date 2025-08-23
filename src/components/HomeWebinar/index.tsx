import type { ReactNode } from "react";
import { WebinarList } from "@site/src/utils/outline/webinar";
import { Card } from "../Card";
import Translate from "@docusaurus/Translate";

export default function HomeWebinar(): ReactNode{
    const heading =  "Our Webinars(Comming Soon...)";

    return <Card 
                cardContents={WebinarList}
                heading= {heading}
            />
}