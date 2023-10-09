import { useRouter } from "next/router";
import styles from "./paginationBar.module.css";
import featuredCatStyles from "../featuredCat/featuredCat.module.css";
import { useEffect, useState } from "react";
import usePagination from "@/lib/hooks/usePagination";
import SkeletonPagination from "@/blocks/collectionGrid/skeletonPagination";

export const dotts = "...";

const PaginationBar = (params) => {
  const [pages, setPages] = useState([1]);
  const [queries, setQueries] = useState();
  const router = useRouter();
  try {
    usePagination(
      Number(router.query?.page || 1),
      params?.query,
      params?.page_count
    ).then((data) => {
      setPages(data);
    });
  } catch (error) {
    console.log(error);
  }

  // useEffect(() => {
  //   const fetchPaginated = async () => {
  //     const paginated = await usePagination(
  //       Number(router.query?.page || 1),
  //       query
  //     );
  //     setPages(paginated);
  //   };
  //   fetchPaginated();
  // }, [router.query]);

  // useEffect(() => {
  //   // const data = Array.from(formData.keys()).reduce((acc, key) => {
  //   //   acc[key] = formData.get(key);
  //   //   return acc;
  //   // }, {});
  // });

  return pages.length > 1 ? (
    <div className={styles.wrapper}>
      <ul className={styles.container}>
        {pages.map((pageNum) => {
          if (typeof pageNum === "string") {
            return (
              <li key={pageNum}>
                <span>{pageNum}</span>
              </li>
            );
          } else {
            return (
              <li key={pageNum}>
                {Number(pageNum) === 1 ? (
                  <button
                    onClick={() => {
                      router.push({ pathname: router.pathname });
                    }}
                    className={` ${!router.query.page ? styles.active : ""}`}
                  >
                    {pageNum}
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      router.push({
                        query: {
                          ...router.query,
                          page: Number(pageNum),
                        },
                      });
                    }}
                    className={` ${
                      Number(router.query.page) === Number(pageNum)
                        ? styles.active
                        : ""
                    }`}
                  >
                    {pageNum}
                  </button>
                )}
              </li>
            );
          }
        })}
      </ul>
    </div>
  ) : (
    <></>
  );
};

export default PaginationBar;
