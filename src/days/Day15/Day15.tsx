import { Tabs } from './Tabs';

const Day15 = () => {
    return (
        <div className="p-10">
            <Tabs defaultValue="tab1">
                <Tabs.List>
                    <Tabs.Trigger value="account">Account</Tabs.Trigger>
                    <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
                </Tabs.List>
                <div>
                    <Tabs.Content value="account">
                        <h3 className="text-xl">Account Info</h3>
                        <p>Manage your profile here.</p>
                    </Tabs.Content>
                    <Tabs.Content value="settings">
                        <h3 className="text-xl">Settings Info</h3>
                        <p>Change your password and preferences.</p>
                    </Tabs.Content>
                </div>
            </Tabs>
        </div>
    );
};

export default Day15;
