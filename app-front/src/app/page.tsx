import Home from "./(public)/(WithHeader)/home/page";
import PublicLayoutWithHeader from "./(public)/(WithHeader)/layout";
import PublicLayout from "./(public)/layout";

export default function Page() {
  return (
    <PublicLayout>
      <PublicLayoutWithHeader>
        <Home />
      </PublicLayoutWithHeader>
    </PublicLayout>
  );
}
