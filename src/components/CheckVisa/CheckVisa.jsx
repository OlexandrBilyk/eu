import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./CheckVisa.module.scss";

export default function CheckVisa() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = async function () {
    try {
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className={styles.checkVisa}>
        <div className="container">
          <h2 className={styles.title}>
            Введите свои паспортные данные в формате FA123456
          </h2>
          <button onClick={() => navigate(-1)} className={styles.back}>
            <AiOutlineClose className={styles.backicon}/>
            Закрыть поиск
          </button>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <label htmlFor="info" className={styles.label}>
              <input
                type="search"
                {...register("info")}
                id="info"
                className={styles.input}
                placeholder="Узнать статус визы"
              />
              <button type="submit" className={styles.submit}>
                <FaSearch className={styles.searchIcon} color="#000" />
              </button>
            </label>

            <h4 className={styles.konsultInfo}>
              Консульство Германии
              <span className={styles.konsultInfoSubTitle}>
                Информация о визе
              </span>
            </h4>
            <p className={styles.visaInfo}></p>
          </form>
        </div>
      </section>
    </>
  );
}
