type Props = {
  label: string;
  value: string;
};

export default function Inputbox({ label, value }: Props) {
  return (
    <div className="flex flex-col not-last:pb-8 ">
      <label htmlFor="fname" className="text-xl">
        {label}
      </label>
      <input
        type="text"
        id="fname"
        value={value}
        className="border-green-700 border rounded-md p-2 "
      />
    </div>
  );
}
