import { FormEvent } from 'react';
import { useNavContext } from 'shared';

const ConfigureTopNav = () => {
  const { title, onUpdate } = useNavContext();

  const hanldeSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      title: { value: string };
    };

    onUpdate?.(target.title.value);
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div>
      <form onSubmit={hanldeSubmit}>
        <label htmlFor="topnav-title">Title:</label>
        <input id="title" name="title" type="text" defaultValue={title} />
        <button type="submit">Save</button>
      </form>
      <br></br>
      <br></br>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default ConfigureTopNav;
