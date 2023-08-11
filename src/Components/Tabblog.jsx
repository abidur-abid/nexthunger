import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Tabblog = () => {
    return (
        <section>
            <div className="custom-container">
                <div className=" color ">
                 <div className=''>
                 <Tabs>
                    <TabList>
                    <Tab>All</Tab>
                    <Tab>Technology</Tab>
                    <Tab>Programming</Tab>
                    <Tab>Software Testing</Tab>
                    </TabList>

                    <TabPanel>
                    <h2>All Information with table</h2>
                    </TabPanel>
                    <TabPanel>
                    <h2>Technology Information with Table</h2>
                    </TabPanel>
                    <TabPanel>
                    <h2>Programming Information with Table</h2>
                    </TabPanel>
                    <TabPanel>
                    <h2>Software Testing Information with Table</h2>
                    </TabPanel>
                </Tabs>
                 </div>
                </div>
            </div>
        </section>
    );
};

export default Tabblog;