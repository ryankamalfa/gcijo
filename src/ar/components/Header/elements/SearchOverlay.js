import { useCallback, useState } from "react";
import { MdClose } from "react-icons/md";

const SearchOverlay = ({ activeStatus, getActiveStatus }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const autoFocus = useCallback(el => el ? el.focus() : null, [])

  return (
    <div className={`search-overlay ${activeStatus ? "active" : ""}`}>
      {/*=======  close icon  =======*/}
      <button
        className="search-overlay__close-icon"
        onClick={() => {
          getActiveStatus(false);
          document.querySelector("body").classList.remove("overflow-hidden");
        }}
      >
        <MdClose />
      </button>
      {/*=======  End of close icon  =======*/}
      {/*=======  search overlay content  =======*/}
      <div className="search-overlay__content">
        <form className="space-mb--20" onSubmit={(e) => {
          e.preventDefault();
          window.open(`/shop/left-sidebar?searchTerm=${searchTerm}`, '_self')
        }}>
          <input id="search-term-input" type="search" placeholder="Search Products..." onChange={(e) => setSearchTerm(e.target.value)} ref={autoFocus} />
        </form>
        <div className="search-overlay__hint"># Hit enter to search</div>
      </div>
      {/*=======  End of search overlay content  =======*/}
    </div >
  );
};

export default SearchOverlay;
