

const FilterModal = ({isOpen}) => {
  return (
    <div
      className={`fixed bottom-0 z-[1] inset-x-0 h-[80vh] bg-white p-4 transform transition-transform ease-in-out duration-300 ${
        isOpen ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      Filters
    </div>
  );
}

export default FilterModal
