import withLogger from './withLogger';

type UserCardProps = {
    name: string;
};

type SimpleButtonProps = {
    label: string;
};

const UserCard = ({ name }: UserCardProps) => {
    return <h2 className="text-xl text-green-400 bg-gray-600 px-4 py-2 rounded-sm">{name}</h2>;
};

const SimpleButton = ({ label }: SimpleButtonProps) => {
    return (
        <button className="cursor-pointer px-8 py-2 bg-blue-500 rounded-sm text-lg hover:bg-blue-400 hover:font-bold active:scale-95 active:shadow-md">
            {label}
        </button>
    );
};

const EnhancedUserCard = withLogger(UserCard);
const LoggedButton = withLogger(SimpleButton);

const Day18 = () => {
    return (
        <div className="grid grid-rows-2 place-items-center gap-4">
            <EnhancedUserCard name="Bond, James Bond" />
            <LoggedButton label="logged" />
        </div>
    );
};

export default Day18;
