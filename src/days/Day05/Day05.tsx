import { Accordion } from './Accordion';
import faqs from './faqs';

const Day05 = () => {
    return (
        <>
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-400">Compound Accordion</h2>
            <div className="max-w-2xl mx-auto">
                <Accordion.Root className="flex flex-col gap-4">
                    {faqs.map((faq) => (
                        <Accordion.Item
                            key={faq.id}
                            value={faq.id}
                            className="bg-gray-400 rounded-sm shadow-sm overflow-hidden"
                        >
                            <Accordion.Trigger className="w-full text-left p-5 text-gray-900 font-medium hover:bg-gray-300 transition-colors flex justify-between items-center cursor-pointer">
                                {faq.question}
                                <span className="text-gray-400 text-sm">▼</span>
                            </Accordion.Trigger>
                            <Accordion.Content className="p-5 pt-2 text-gray-700 border-t border-gray-500 leading-relaxed bg-gray-400">
                                {faq.answer}
                            </Accordion.Content>
                        </Accordion.Item>
                    ))}
                </Accordion.Root>
            </div>
        </>
    );
};

export default Day05;
