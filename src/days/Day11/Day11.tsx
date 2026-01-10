import useUndoRedo from './useUndoRedo';

type BoxState = {
    color: string;
    position: { x: number; y: number };
};

const Day11 = () => {
    const { value, set, undo, redo, canUndo, canRedo } = useUndoRedo<BoxState>({
        color: 'purple',
        position: { x: 10, y: 10 },
    });

    return (
        <>
            <div className="h-96 bg-slate-800 relative">
                <div
                    className="h-20 w-30"
                    style={{
                        backgroundColor: value.color,
                        transform: `translate(${value.position.x}px, ${value.position.y}px)`,
                    }}
                ></div>
            </div>
            <div className="flex justify-center items-center gap-8">
                <input
                    type="color"
                    name=""
                    id=""
                    className="h-12"
                    value={value.color}
                    onChange={(e) => set({ ...value, color: e.target.value })}
                />
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <label htmlFor="x-cor">X</label>
                        <input
                            type="range"
                            min="0"
                            max="600"
                            name=""
                            id="x-cor"
                            value={value.position.x}
                            onChange={(e) =>
                                set({ ...value, position: { ...value.position, x: Number(e.target.value) } })
                            }
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <label htmlFor="y-cor">Y</label>
                        <input
                            type="range"
                            min="0"
                            max="300"
                            name=""
                            id="y-cor"
                            value={value.position.y}
                            onChange={(e) =>
                                set({ ...value, position: { ...value.position, y: Number(e.target.value) } })
                            }
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center gap-4 mt-4">
                <button
                    className="px-4 py-2 bg-green-600 rounded-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-500 active:scale-95 active:shadow-md"
                    disabled={!canUndo}
                    onClick={() => undo()}
                >
                    Undo
                </button>
                <button
                    className="px-4 py-2 bg-blue-600 rounded-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-500 active:scale-95 active:shadow-md"
                    disabled={!canRedo}
                    onClick={() => redo()}
                >
                    Redo
                </button>
            </div>
        </>
    );
};

export default Day11;
