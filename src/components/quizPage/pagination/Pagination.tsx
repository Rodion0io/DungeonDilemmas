// import styles from './pagination.module.css';
// import type { PaginationModel } from '../../../@types/types';
//
// interface PaginationProps {
//     pagination: PaginationModel;
//     onPageChange: (page: number) => void;
// }
//
// const Pagination = ({ pagination, onPageChange }: PaginationProps) => {
//     const { page, pagesCount } = pagination;
//
//     const handlePageChange = (newPage: number) => {
//         if (newPage >= 1 && newPage <= pagesCount) {
//             onPageChange(newPage);
//         }
//     };
//
//     const renderPageNumbers = () => {
//         const pages = [];
//         const maxVisiblePages = 5;
//
//         let startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2));
//         let endPage = Math.min(pagesCount, startPage + maxVisiblePages - 1);
//
//         if (endPage - startPage + 1 < maxVisiblePages) {
//             startPage = Math.max(1, endPage - maxVisiblePages + 1);
//         }
//
//         for (let i = startPage; i <= endPage; i++) {
//             pages.push(
//                 <button
//                     key={i}
//                     className={`${styles.pageButton} ${i === page ? styles.activePage : ''}`}
//                     onClick={() => handlePageChange(i)}
//                 >
//                     {i}
//                 </button>
//             );
//         }
//
//         return pages;
//     };
//
//     if (pagesCount <= 1) {
//         return null;
//     }
//
//     return (
//         <div className={styles.pagination}>
//             <button
//                 className={`${styles.navButton} ${page === 1 ? styles.disabled : ''}`}
//                 onClick={() => handlePageChange(page - 1)}
//                 disabled={page === 1}
//             >
//                 ←
//             </button>
//
//             {page > 3 && pagesCount > 5 && (
//                 <>
//                     <button
//                         className={styles.pageButton}
//                         onClick={() => handlePageChange(1)}
//                     >
//                         1
//                     </button>
//                     {page > 4 && <span className={styles.ellipsis}>...</span>}
//                 </>
//             )}
//
//             {renderPageNumbers()}
//
//             {page < pagesCount - 2 && pagesCount > 5 && (
//                 <>
//                     {page < pagesCount - 3 && <span className={styles.ellipsis}>...</span>}
//                     <button
//                         className={styles.pageButton}
//                         onClick={() => handlePageChange(pagesCount)}
//                     >
//                         {pagesCount}
//                     </button>
//                 </>
//             )}
//
//             <button
//                 className={`${styles.navButton} ${page === pagesCount ? styles.disabled : ''}`}
//                 onClick={() => handlePageChange(page + 1)}
//                 disabled={page === pagesCount}
//             >
//                 →
//             </button>
//         </div>
//     );
// };
//
// export default Pagination;
