interface CoursePillProps {
    title: string;
  }
  
  const CoursePill: React.FC<CoursePillProps> = ({ title }) => {
    return (
      <div
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          borderRadius: '25px',
          whiteSpace: 'nowrap',
        }}
      >
        {title}
      </div>
    );
  };
  
  export default CoursePill;