const SectionTitle = ({title}) => {
    return (
        <section>
            <div className='custom-container'>
            <div className="custom-row my-12">
                <h3 className='custom-border mx-auto color'>{title}</h3> 
            </div>
            </div>
        </section>
    );
};

export default SectionTitle;