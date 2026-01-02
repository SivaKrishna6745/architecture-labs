export type dataItem = {
    name: string;
    isFolder: boolean;
    items?: dataItem[];
};

export const data: dataItem[] = [
    {
        name: 'src',
        isFolder: true,
        items: [
            {
                name: 'components',
                isFolder: true,
                items: [
                    {
                        name: 'Day04',
                        isFolder: true,
                        items: [
                            {
                                name: 'Day04.tsx',
                                isFolder: false,
                            },
                            {
                                name: 'FileExplorer.tsx',
                                isFolder: false,
                            },
                            {
                                name: 'data.ts',
                                isFolder: false,
                            },
                        ],
                    },
                ],
            },
            {
                name: 'assets',
                isFolder: true,
            },
        ],
    },
    {
        name: 'App.tsx',
        isFolder: false,
    },
    {
        name: 'package.json',
        isFolder: false,
    },
];
