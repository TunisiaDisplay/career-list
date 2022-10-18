import BlogPost from "../BlogPost";
import Pagination from '@mui/material/Pagination';

import Style from "./ListContent.module.css";

const ListContent = () => {
    return (
        <>
            <div className={Style.container}>
                <BlogPost />
                <BlogPost />
                <BlogPost />
                <BlogPost />
                <BlogPost />
                <BlogPost />
            </div>
            <div>
                <Pagination count={10} color="secondary" />
            </div>
        </>
    );
}

export default ListContent;