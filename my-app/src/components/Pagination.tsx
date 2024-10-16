interface PaginationProps {
    currentPage: number;
    totalItems: number;
    itemsPerPage: number;
    setCurrentPage: (page: number) => void;
  }
  
  export default function Pagination({
    currentPage,
    totalItems,
    itemsPerPage,
    setCurrentPage,
  }: PaginationProps) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
  
    return (
      <div className="flex items-center">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 text-gray-500"
        >
          Previous
        </button>
  
        <span className="mx-2">
          {currentPage} of {totalPages}
        </span>
  
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 text-gray-500"
        >
          Next
        </button>
      </div>
    );
  }
  