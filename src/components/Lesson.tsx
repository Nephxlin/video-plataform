import classNames from "classnames";
import { format, isPast } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CheckCircle, Lock } from "phosphor-react";
import { Link, useParams } from "react-router-dom";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>();
  const isLessonAvailabe = isPast(props.availableAt);
  const availabelDateFormated = format(
    props.availableAt,
    "EEEE' • 'd' de • 'MMMM' • 'k'h'mm'",
    {
      locale: ptBR,
    }
  );

  const isActiveLesson = slug === props.slug;

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">{availabelDateFormated}</span>
      <div
        className={classNames(
          `rounded border border-gray-500 group-hover:border-green-500 p-4 mt-2 `,
          {
            "bg-green-500": isActiveLesson,
          }
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailabe ? (
            <span className={classNames("text-smfont-medium flex items-center gap-2",{
              'text-white': isActiveLesson,
              'text-blue-500': !isActiveLesson
            })}>
              <CheckCircle size={20} />
              conteudo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className={classNames("text-xs rounded px-2 py-[0.125rem] text-white border font-bold",{
            'border-white': isActiveLesson,
            'border-green-300': !isActiveLesson
          })}>
            {props.type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <strong className={classNames("text-gray-200 mt-5 block",{
          'text-white':isActiveLesson,
          'text-gray-200': !isActiveLesson
        })}>{props.title}</strong>
      </div>
    </Link>
  );
}
