import locatios from "../../../../../data/dataprovider/locationsData";

interface FilterDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    onApply: () => void;
    filters: string[];
    setFilters: React.Dispatch<React.SetStateAction<string[]>>;
}

const FilterDrawer: React.FC<FilterDrawerProps> = ({
    isOpen,
    onClose,
    onApply,
    filters,
    setFilters,
}) => {
    // Your filter options and logic here

    return (
        <div className={`filter-drawer w-full flex justify-center flex-col items-center z-50 border-blue-900 border-solid border-2 ${isOpen ? "open" : ""}`}>
            <div className="flex text-white text-xl font-bold justify-between p-3 items-center bg-blue-700 w-full ">
                <h2>Filters</h2>
                <button onClick={onClose}><img className="w-10 h-10" src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png" alt="" /></button>
            </div>
            <div className="text-base font-bold ">
                <label>Appointment Type:</label>
                <select className="font-light"
                // onChange={(e) => handleFilterChange('appointmentType', e.target.value)}
                >
                    <option value="">All</option>
                    <option value="online">Online</option>
                    <option value="atHospital">At Hospital</option>
                </select>
            </div>
            <div className="text-base font-bold ">
                <label>Available Today:</label>
                <input
                    type="checkbox"
                //   checked={filters.availableToday}
                //   onChange={() => handleFilterChange('availableToday', !filters.availableToday)}
                />
            </div>
            <div className="text-base font-bold ">
                <label>Doctor Type:</label>
                <select className="font-light"
                // onChange={(e) => handleFilterChange('appointmentType', e.target.value)}
                >
                    <option value="">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <div className="text-base font-bold ">
                <label>Fee Range</label>
                <select className="font-light"
                // onChange={(e) => handleFilterChange('appointmentType', e.target.value)}
                >
                    <option value="below">Below Rs. 1,000</option>
                    <option value="onetotwo">Rs. 1,000 - Rs. 2,000</option>
                    <option value="twotothree">Rs. 2,000 - Rs. 3,000</option>
                    <option value="threeToFive">Rs. 3,000 - Rs. 5,000</option>
                </select>
            </div>
            <div className="text-base font-bold ">
                <label>Location</label>
                <select className="font-light"
                // onChange={(e) => handleFilterChange('appointmentType', e.target.value)}
                >
                    {locatios.map((id) => (
                        <option value={`${id.id}`}>{id.name}</option>
                    ))}
                    
                </select>
            </div>
            <div className="text-base font-bold ">
                <label>Verified Doctor Only: </label>
                <input type="checkbox"/>
            </div>
            <div className="text-base font-bold">
                <label>Surgeon Only: </label>
                <input type="checkbox"/>
            </div>

            <div className="flex p-10 items-center justify-between w-full">
                <button onClick={onClose}>Close</button>
                <button onClick={onApply}>Apply</button>
            </div>
        </div>
    );
};


export default FilterDrawer;