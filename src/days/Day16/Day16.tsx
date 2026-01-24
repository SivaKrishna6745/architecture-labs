import Text from './Text';

const Day16 = () => {
    return (
        <div className="flex flex-col items-center">
            <Text
                as="h1"
                size="lg"
                weight="bold"
                className="py-2 px-4 border-2 border-blue-500 bg-white/20 m-2 rounded-sm"
            >
                I am a Header
            </Text>
            <Text
                as="p"
                size="lg"
                weight="bold"
                className="py-2 px-4 border-2 border-orange-500 bg-white/20 m-2 rounded-sm"
            >
                I am a paragraph
            </Text>
            <Text
                as="a"
                href="https://www.google.com"
                size="lg"
                weight="bold"
                className="py-2 px-4 m-2 text-green-400 decoration-amber-600"
            >
                I am a link
            </Text>
        </div>
    );
};

export default Day16;
